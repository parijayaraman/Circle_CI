'use strict';

angular.module('customers').factory('PaymentService', ['$resource',
  function($resource) {
    var resource;

    resource = $resource('/api/process/payment', { token: '@token', amount: '@amount' }, {
      processPayments: {
        method: 'GET',
        isArray: true
      }
    });

    return resource;
  }
]);
