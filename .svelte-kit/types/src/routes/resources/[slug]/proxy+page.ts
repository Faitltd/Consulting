// @ts-nocheck
import resources from '$data/resources.json';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

type ResourceDetail = {
  sections: { heading: string; body: string[] }[];
};

const resourceDetails: Record<string, ResourceDetail> = {
  'build-ops-playbook': {
    sections: [
      {
        heading: 'Start with outcomes',
        body: [
          'Pick one workflow that impacts revenue or quality and define what "good" looks like.',
          'List the actors, inputs, outputs, and exceptions so you know where things go wrong.'
        ]
      },
      {
        heading: 'Document the path',
        body: [
          'Use a simple step-by-step outline with owners and SLAs. Avoid flowchart sprawl to start.',
          'Capture links to templates, forms, and tools in one place so the playbook is the source of truth.'
        ]
      },
      {
        heading: 'Stabilize then automate',
        body: [
          'Fix missing inputs and approvals before wiring automation. Otherwise you automate the chaos.',
          'Pilot with one team, gather feedback, and only then add triggers and alerts.'
        ]
      }
    ]
  },
  'automation-scorecard': {
    sections: [
      {
        heading: 'Score by impact',
        body: [
          'Estimate hours saved, error reduction, and speed gains. If you cannot quantify, keep it small.',
          'Look for compound value: tasks that unblock downstream work or improve data quality.'
        ]
      },
      {
        heading: 'Score by effort',
        body: [
          'Consider data availability, edge cases, and required approvals. Avoid brittle automations first.',
          'Prefer changes inside existing tools to reduce adoption friction.'
        ]
      },
      {
        heading: 'Pick the first three',
        body: [
          'Choose one quick win, one medium lift, and one foundational fix (like clean data inputs).',
          'Ship them in order and reassess your backlog as you learn.'
        ]
      }
    ]
  },
  'handoff-checklist': {
    sections: [
      {
        heading: 'Define the trigger',
        body: [
          'Specify exactly when the handoff starts and what must be true. Example: "Signed SOW and deposit collected."'
        ]
      },
      {
        heading: 'List required inputs',
        body: [
          'Owner, due date, scope, constraints, and links to assets. Make fields required in your system of record.',
          'Reject handoffs without inputs to avoid rework later.'
        ]
      },
      {
        heading: 'Confirm receipt',
        body: [
          'Use an automated acknowledgement with owner + expected delivery date.',
          'Escalate if the acknowledgement is not sent within your SLA.'
        ]
      }
    ]
  }
};

export const load = ({ params }: Parameters<PageLoad>[0]) => {
  const base = resources.find((resource) => resource.slug === params.slug);
  const detail = resourceDetails[params.slug];

  if (!base || !detail) {
    throw error(404, 'Resource not found');
  }

  return {
    resource: {
      ...base,
      ...detail
    }
  };
};
