/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
;
import { FragmentRefs } from "@graphitation/apollo-react-relay-duct-tape";
export type AppQueryVariables = {};
export type AppQueryResponse = {
    readonly todos: {
        readonly id: string;
        readonly totalCount: number;
        readonly " $fragmentRefs": FragmentRefs<"TodoList_todosFragment" | "TodoListFooter_todosFragment">;
    };
};
export type AppQuery = {
    readonly response: AppQueryResponse;
    readonly variables: AppQueryVariables;
};

/*
query AppQuery {
  todos {
    id
    totalCount
    ...TodoList_todosFragment
    ...TodoListFooter_todosFragment
  }
}

fragment TodoListFooter_todosFragment on TodosConnection {
  uncompletedCount
  id
}

fragment TodoList_todosFragment on TodosConnection {
  edges {
    node {
      id
      isCompleted
      ...Todo_todoFragment
    }
  }
  id
}

fragment Todo_todoFragment on Todo {
  id
  description
  isCompleted
}

*/
export const executionQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AppQuery"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"todos"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"totalCount"},"arguments":[],"directives":[]},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TodoList_todosFragment"},"directives":[]},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TodoListFooter_todosFragment"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TodoListFooter_todosFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TodosConnection"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uncompletedCount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TodoList_todosFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TodosConnection"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isCompleted"},"arguments":[],"directives":[]},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Todo_todoFragment"},"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Todo_todoFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Todo"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isCompleted"},"arguments":[],"directives":[]}]}}]};

/*
query AppQuery {
  todos {
    id
    totalCount
  }
}

*/
export const watchQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AppQuery"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"todos"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"totalCount"},"arguments":[],"directives":[]}]}}]}}]};