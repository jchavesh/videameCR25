
// This file is no longer used by the application since the client portal
// now dynamically generates download links based on the project code entered.
// You can safely delete this file or keep it for reference.

export interface ClientProject {
  code: string;
  clientName: string;
  projectName: string;
  downloadUrl: string;
}

export const clientProjects: ClientProject[] = [];
