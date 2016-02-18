// Copyright 2015 Mark Cornick
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

var powm = require('../lib/powm');
var test = require('ava');
var uniq = require('lodash.uniq');

test('default length', function (t) {
  t.is(powm().length, 16);
});

test('specific length', function (t) {
  t.is(powm(8).length, 8);
});

test('length longer than pool length', function (t) {
  t.is(powm(64).length, 64);
});

test('length too short', function (t) {
  t.throws(function () {
    powm(1);
  }, 'Cannot generate password of length 1');
});

test('all three character classes', function (t) {
  var password = powm();
  t.regex(password, /[A-Z]/);
  t.regex(password, /[a-z]/);
  t.regex(password, /\d/);
});

test('does not repeat characters', function (t) {
  t.is(uniq(powm(16).split('')).length, 16);
});

test('repeats characters', function (t) {
  t.not(uniq(powm(64).split('')).length, 64);
});

test('passwords are not identical', function (t) {
  var password1 = powm();
  var password2 = powm();
  t.not(password1, password2);
});
