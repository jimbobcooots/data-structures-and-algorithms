'use strict';

import LinkedList from '../linked-list/ll';
// import Node from '../linked-list/node';

describe('testing linked list', () => {
  let testList;
  beforeEach(() => {
    testList = new LinkedList();
  });

  afterEach(() => {
    testList = null;
  });

//   test('instantiate a new instance', () => {
//     expect(testList.head).toBeNull();
//   });

//   describe('APPENDING a value to the end of the linkedlist', () => {
//     test('#append', () => {
//       testList.append(5);
//       expect(testList.head.value).toEqual(5);
//       testList.append(7);
//       expect(testList.head.value).toEqual(5);
//       expect(test.head.next.value).toEqual(7);
//       testList.append(104);
//       expect(testList.head.value).toEqual(5);
//       expect(testList.head.next.value).toEqual(7);
//       expect(testList.head.next.next.value).toEqual(104);
//     });
//   });

//   describe('insertBefore our value argument', () => {
//     test('#insertBefore', () => {
//       testList.append(5);
//       testList.append(6);
//       testList.append(7);
//       testList.insertBefore(6, 31);
//       expect(testList.head.next).toEqual(31);
//       testList.insertBefore(31, 20);
//       expect(testList.head.next.next).toEqual(20);
//     });
//   });

//   describe('insertAfter our value argument', () => {
//     test('#insertAfter', () => {
//       testList.append(5);
//       testList.append(6);
//       testList.append(7);
//       testList.insertAfter(6, 31);
//       expect(testList.head.next.next).toEqual(31);
//       testList.insertAfter(31, 20);
//       expect(testList.head.next.next.next).toEqual(20);
//     });
//   });
// });

