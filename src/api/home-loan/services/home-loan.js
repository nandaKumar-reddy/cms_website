'use strict';

/**
 * home-loan service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-loan.home-loan');
