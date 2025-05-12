import { z, ZodError } from 'zod';
export default (error: ZodError, separator: string = "\n"): string => {
  const flattened: string[] = [];
  const processIssues = (issues: z.ZodIssue[]) => {
    for (const issue of issues) flattened.push(issue.message);
    // Removed recursive check for 'inner' as it does not exist on 'ZodIssue'
  };
  processIssues(error.issues);
  return flattened.join(separator);
}
