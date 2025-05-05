import { Controller, Get, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';
import { promises as fs } from 'fs';
import * as path from 'path';
async function loadServerRenderer() {
  try {
    const { render } = await import(path.resolve(__dirname, '../../../client/dist/server/entry-server.js'));
    // console.log(render)
    return render;
  } catch (error) {
    console.error('Error loading server renderer:', error);
    return null;
  }
}
@Controller('*')
export class AppController {
  constructor(private readonly appService: AppService) { }
  @Get()
  async renderApp(@Req() req: Request, @Res() res: Response) {
    const url = req.originalUrl;
    const render = await loadServerRenderer();
    if (!render)  return res.status(500).send('Server renderer not available.');
    try {
      const template = await fs.readFile(path.resolve(__dirname, '../../../client/dist/client/index.html'),'utf-8');
      // You might need to pass a context object to your renderer
      const context = {};
      const appHtml = await render(url, context);
      const html = template.replace(`<div id="root"></div>`, `<div id="root">${appHtml}</div>`);
      // Inject any context data into the HTML if needed
      // const finalHtml = html.replace('', JSON.stringify(context));
      res.setHeader('Content-Type', 'text/html');
      console.log(html)
      res.send(html);
    } catch (error) {
      console.error('Rendering error:', error);
      res.status(500).send('Internal Server Error');
    }
  }
}
