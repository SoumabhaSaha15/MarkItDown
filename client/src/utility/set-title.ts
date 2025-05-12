export default (title:string)=>{
  document.title = title;
  const element = document.querySelector('meta[name="description"]');
  if (element) {
    element.setAttribute("content", title);
  }
}
