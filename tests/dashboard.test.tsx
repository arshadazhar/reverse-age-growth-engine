import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import Dashboard from '../app/page';
import { Shell } from '../components/shell';
import { workspaces } from '../lib/workspaces';
vi.mock('next/navigation',()=>({usePathname:()=>'/keywords',notFound:()=>{throw new Error('NOT_FOUND');}}));
vi.mock('next/link',()=>({default:({children,...props}:React.AnchorHTMLAttributes<HTMLAnchorElement>)=><a {...props} onClick={event=>{event.preventDefault();props.onClick?.(event);}}>{children}</a>}));
afterEach(cleanup);
describe('demonstration dashboard',()=>{
 it('discloses synthetic metrics and disconnected accounts',()=>{render(<Dashboard/>);expect(screen.getByText(/All figures, trends and workflow items/)).toHaveTextContent('No live accounts are connected');expect(screen.getAllByText(/Synthetic/).length).toBeGreaterThanOrEqual(5);expect(screen.getByText('No content has been published')).toBeInTheDocument();});
 it('offers accessible chart description and content examples',()=>{render(<Dashboard/>);expect(screen.getByRole('img',{name:/Synthetic organic visits/})).toBeInTheDocument();expect(screen.getByRole('table')).toHaveAccessibleName('Synthetic content workflow examples');expect(screen.getByText('Roman Urdu')).toBeInTheDocument();expect(screen.getByRole('link',{name:/Create content/})).toHaveAttribute('href','/content-studio');});
});
describe('workspace navigation',()=>{
 it('includes all nine destinations and indicates current page',()=>{render(<Shell><p>Test page</p></Shell>);const nav=screen.getByRole('navigation');expect(nav.querySelectorAll('a')).toHaveLength(9);expect(screen.getByRole('link',{name:'Keywords'})).toHaveAttribute('aria-current','page');});
 it('opens mobile navigation and closes after choosing a page',()=>{render(<Shell>Test</Shell>);const toggle=screen.getByRole('button',{name:'Open navigation'});fireEvent.click(toggle);expect(toggle).toHaveAttribute('aria-expanded','true');fireEvent.click(screen.getByRole('link',{name:'Leads'}));expect(toggle).toHaveAttribute('aria-expanded','false');});
 it('has unique route definitions and explicit limitations',()=>{expect(new Set(workspaces.map(p=>p.slug)).size).toBe(8);for(const p of workspaces){expect(p.tasks).toHaveLength(3);expect(p.note.length).toBeGreaterThan(50);}});
});
