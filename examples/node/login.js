/**
 * Copyright 2015 Workfront
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Logs in
 */

'use strict';
var Workfront = require('./../../');
var util = require('util');

var instance = new Workfront.NodeApi({
    url: 'http://localhost:8080',
    version: '7.0'
});

util.log('Logging in ...');
instance.login('ayush@itinker.io', 'Ayushmathur@12').then(
	function(data) {
		util.log('Login success. Received data:');
		console.log(util.inspect(data, {colors:true}));
	},
	function(error) {
		util.log('Login failure. Received data:');
		console.log(util.inspect(error, {colors:true}));
	}
);
