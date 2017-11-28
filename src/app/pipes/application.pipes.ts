import { Pipe, PipeTransform }  from '@angular/core';

@Pipe({name: 'mapToIterable'})
export class MapToIterable implements PipeTransform {

    public transform(value, args:string[]) : any {
        let keys = [];
        for (let key in value) {
          keys.push(key);
        }
        return keys;
    }

}

@Pipe({name: 'mapIdToText'})
export class MapIdToText implements PipeTransform {

    public transform(id, args:string[]) : any {

        const text = {
                'process': 'Process',
                'goal': 'Goal',
                'task': 'Task',
                'crowd': 'Crowd',
                'initiator': 'Initiator',
                'cost_reduction': 'Cost reduction',
                'risk_reduction': 'Risk reduction',
                'high': 'High',
                'low': 'Low',
                'authenticity': 'Authenticity',
                'crowd_community': 'Crowd community',
                'innovation': 'Innovation',
                'contribution_type': 'Contribution type',
                'main_motivational_driver': 'Motivator type',
                'input_tolerance': 'Input tolerance',
                'main_beneficiary': 'Main beneficiary',
                'value_type': 'Value type',
                'dependencies': 'Dependencies',
                'type': 'Type',
                'content': 'Content',
                'tangible_reward': 'Tangible reward',
                'coupled': 'Coupled',
                'decoupled': 'Decoupled',
                'creation': 'Creation',
                'evaluation': 'Evaluation',
                'organization': 'Organization',
                'personal_achievement_and_learning': 'Personal achievement and learning',
                'social_status_and_reputation': 'Social status and reputation',
                'entertainment': 'Entertainment',
                'aggregation_of_contributions': 'Aggregation of contributions',
                'form_of_remuneration': 'Form of remuneration',
                'peer_contributions_accessibility': 'Accessibility of peer contributions',
                'preselection_of_contributors': 'Preselection of contributors',
                'remuneration_for_contributions': 'Remuneration for contributions type',
                'qualification_based': 'Qualification-based',
                'context_specific': 'Context specific',
                'both': 'Both',
                'modify': 'Modify',
                'assess': 'Assess',
                'view': 'View',
                'integrative': 'Integrative',
                'selective': 'Selective',
                'fixed': 'Fixed',
                'success_based': 'Success-based',
                'none': 'None',
                'token': 'Token',
                'visibility': 'Visibility',
                'market': 'Market',
            };

            return text[id];
    }

}
