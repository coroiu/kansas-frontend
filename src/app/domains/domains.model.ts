export interface DomainModel {
  id: string;
  domain: string;
  target: string;
  port: number;
  requiresAuthentication: boolean;
}
