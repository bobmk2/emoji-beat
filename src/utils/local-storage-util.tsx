import * as store from 'store';

function mk(prefix: string, name: string) {
  return `${prefix}___${name}`;
}

/**
 * 文字列をLocalStorageから読み込む
 * @param {string} prefix プリフィックス(一般的には画面名)
 * @param {string} name 名前
 * @return {string}
 */
export function loadString(prefix: string, name: string): string | undefined {
  const val = store.get(mk(prefix, name));
  return val;
}

/**
 * 文字列をLocalStorageに保存
 * @param {string} prefix プリフィックス(一般的には画面名)
 * @param {string} name 名前
 * @param {string} value 保存する値
 */
export function saveString(prefix: string, name: string, value: string): void {
  store.set(mk(prefix, name), value);
}
