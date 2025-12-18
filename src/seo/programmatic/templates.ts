export type TemplateVars = {
  SERVICE: string;
  CITY: string;
  STATE: string;
  COUNTRY: string;
};

export function fillTemplate(template: string, vars: TemplateVars) {
  return template
    .replaceAll('{{SERVICE}}', vars.SERVICE)
    .replaceAll('{{CITY}}', vars.CITY)
    .replaceAll('{{STATE}}', vars.STATE)
    .replaceAll('{{COUNTRY}}', vars.COUNTRY);
}


