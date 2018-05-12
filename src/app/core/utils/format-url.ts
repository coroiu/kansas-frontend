export function formatUrl(template: string, variables: object): string {
  Object.entries(variables).forEach(([key, value]) => {
    template = template.replace(new RegExp(':' + key + '?', 'g'), value);
  });
  return template;
}
