import { gql } from  '@apollo/client';

export const CREATE_TASK = gql`
    mutation CreateTask($title: String!) {
        createTask(title: $title) { id title }
    }
`;

export const COMPLETE_TASK = gql`
    mmutation CompleteTask($taskId: Int!) {
        completeTask(taskId; $taskId) { id isCompleted }
    }
`;