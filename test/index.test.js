import getFileAsync from   '../index.js';
import { expect, test } from "@jest/globals";
//node v v14.19.1

test('É uma função', () => {
    expect(typeof getFileAsync).toBe('function');
  });