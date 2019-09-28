import { Action } from 'redux-actions';

export interface DoneCurrentDatePayload {
  date: Date;
}

export interface StartCurrentDateAction extends Action<EmptyPayload> {}
export interface DoneCurrentDateAction extends Action<DoneCurrentDatePayload> {}
export interface FailCurrentDateAction extends Action<FailPayload> {}

export type CurrentDatePayload = DoneCurrentDatePayload & EmptyPayload & FailPayload;
export type CurrentDateAction = StartCurrentDateAction & DoneCurrentDateAction & FailCurrentDateAction;
