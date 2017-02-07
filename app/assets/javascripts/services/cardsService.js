Djello.factory('cardsService', ['Restangular', '$q', function(Restangular, $q) {
  var cards = {};

  var getCardsFromList = function(listId) {
    return Restangular.one('lists', listId).all('cards').getList().then(function(response) {
      cards[listId] = response;
      return cards;
    });
  }

  var getCardsFromLists = function(lists) {
    var cardPromises = [];
    for (var i = 0; i < lists.length; i++) {
      cardPromises.push(getCardsFromList(lists[i].id))
    }
    return $q.all(cardPromises).then(function() {
      return cards
    })
  }

  var updateCard = function(card) {
      card.put();
      getCardsFromLists(card.list_id);
  }

  var createCard = function(cardParams, listId) {
    Restangular.one('lists', listId).all('cards').post({card: cardParams}).then(function(response) {
        cards[listId].push(response)
    });
  }

  var removeCard = function(listId, cardId) {
    for (var i = 0; i < cards[listId].length; i++) {
      if (cards[listId][i].id === cardId) {
        cards[listId].splice(i, 1)
      }
    }
  }

  return {
    getCardsFromLists: getCardsFromLists,
    getCardsFromList: getCardsFromList,
    updateCard: updateCard,
    createCard: createCard,
    removeCard: removeCard,
    cards: cards
  }

}])
