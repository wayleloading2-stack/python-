import { gql } from '@apollo/client';

export const ALL_TASKS = gql `
    query ALLTasks {
        allTasks{
            id
            title
            description
            isCompleted
            category {name color}
        }
    }
`;