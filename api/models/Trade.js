/**
 * Trade
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs    :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    sym_id:       'integer',
    open_price:   'float',
    close_price:  'float',
    high_price:   'float',
    low_price:    'float',
    vol:          'float',
    trade_date:   'date'
  }

};
