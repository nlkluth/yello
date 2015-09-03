'use strict';

module.exports = {
  chat: [{
    text: 'test',
    user: 'James',
    id: 1
  }, {
    text: 'foo',
    user: 'Fred',
    id: 2
  }],
  broadcasters: [],
  viewers: [{
    user: 'James',
    id: 1
  }],

  getChat: function() {
    return this.chat;
  },

  setChat: function(item) {
    this.chat.push(item);
  },

  getBroadcasters: function() {
    return this.broadcasters;
  },

  setBroadcasters: function(item) {
    this.broadcasters.push(item);
  },

  getViewers: function() {
    return this.viewers;
  }
};
