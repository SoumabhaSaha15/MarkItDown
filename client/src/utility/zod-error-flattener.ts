import { z, ZodError } from 'zod';

export default (error: ZodError, separator: string = "\n"):string =>  {
  const flattened: string[] = [];
  function processIssues(issues: z.ZodIssue[]) {
    issues.forEach((issue) => {
      flattened.push(issue.message);
      // Removed recursive check for 'inner' as it does not exist on 'ZodIssue'
    });
  }
  processIssues(error.issues);
  return flattened.join(separator);
}
