export type Stage='Lead'|'Discovery'|'Proposal'|'Contract'|'Readiness'|'Delivery'|'Billing'|'Closure';
export type Health='Healthy'|'At risk'|'Blocked'|'Completed';
export type TaskStatus='Not started'|'In progress'|'Blocked'|'Done';
export interface Client{id:string;name:string;industry:string;}
export interface Engagement{id:string;clientId:string;name:string;owner:string;pm:string;stage:Stage;health:Health;priority:'Low'|'Medium'|'High'|'Critical';start:string;target:string;billingModel:string;value:number;nextMilestone:string;blockers:number;lastUpdate:string;readiness:string[];cadence:string;format:string;}
export interface Task{id:string;engagementId:string;title:string;owner:string;due:string;status:TaskStatus;priority:'Low'|'Medium'|'High'|'Critical';critical:boolean;}
export interface Milestone{id:string;engagementId:string;name:string;due:string;status:'Upcoming'|'In progress'|'Completed'|'Overdue';}
export interface Consultant{id:string;name:string;role:string;expertise:string[];capacity:number;allocated:number;}
export interface Lead{id:string;client:string;name:string;owner:string;stage:string;qualification:string;proposal:string;nextAction:string;due:string;notes:string;value:number;}
export interface Risk{id:string;engagementId:string;title:string;severity:'Low'|'Medium'|'High'|'Critical';evidence:string;impact:string;action:string;owner:string;rule:string;reviewed:boolean;followUp:string;}
export interface State{clients:Client[];engagements:Engagement[];tasks:Task[];milestones:Milestone[];consultants:Consultant[];leads:Lead[];risks:Risk[];lastAnalysis:string;}
