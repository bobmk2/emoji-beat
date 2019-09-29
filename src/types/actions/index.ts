import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { State } from '../states';
import { CurrentDateAction } from './current-date-action-types';
import { Action } from 'redux';

export type Actions = CurrentDateAction;

export type MyThunkAction<R = any, A extends Action = Actions> = ThunkAction<Promise<R>, State, undefined, A>;
export type MyThunkDispatch = ThunkDispatch<State, undefined, Actions>;
