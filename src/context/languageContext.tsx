import React from 'react';

export interface State {
  language: string;
}

export interface Action {
  type: 'CHANGE_LANGUAGE';
  payload?: any;
}

export const StoreContext = React.createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>(null);

export const initialState: State = {
  language: 'zh',
};

export const reducer: React.Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'CHANGE_LANGUAGE':
      return {
        language: action.payload.language,
      };
    default:
      return { ...state };
  }
};
