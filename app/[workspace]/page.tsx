import { notFound } from 'next/navigation';
import { ArrowRight, CircleDashed, LockKeyhole } from 'lucide-react';
import Link from 'next/link';
import { workspaces } from '../../lib/workspaces';
export function generateStaticParams() { return workspaces.map(({slug})=>({workspace:slug})); }
export async function generateMetadata({params}:{params:Promise<{workspace:string}>}) { const {workspace}=await params; return {title:workspaces.find(p=>p.slug===workspace)?.title??'Not found'}; }
export default async function WorkspacePage({params}:{params:Promise<{workspace:string}>}) {
 const {workspace}=await params; const page=workspaces.find(p=>p.slug===workspace); if(!page) notFound();
 return <div className="page-content"><div className="page-heading"><div><div className="eyebrow">{page.eyebrow}</div><h1>{page.title}</h1><p>{page.description}</p></div><span className="demo-pill">Planned capability</span></div><div className="demo-notice"><LockKeyhole size={19}/><p>{page.note}</p></div><section className="panel workspace-panel"><span className="workspace-icon"><CircleDashed size={30}/></span><h2>Your next workflow starts here</h2><p>This workspace is a navigation preview. These steps describe the planned workflow and do not perform actions.</p><ol className="planned-steps">{page.tasks.map((task,i)=><li key={task}><span className="step-number">{i+1}</span>{task}</li>)}</ol><Link href="/" className="text-link">Back to growth overview <ArrowRight size={16}/></Link></section></div>;
}
