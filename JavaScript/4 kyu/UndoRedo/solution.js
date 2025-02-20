// https://www.codewars.com/kata/531489f2bb244a5b9f00077e

function undoRedo(object) {
  var actions = [];

  function findLastAction(undoneStatus) {
    for (let i = actions.length - 1; i >= 0; i--) {
      const action = actions[i];
      if ((action.name === 'del' || action.name === 'set') && action.has_undone === undoneStatus) {
        return action;
      }
    }
    return null;
  }

  function redoUndoSet(lastAction) {
    if (lastAction.params.old_value !== undefined) {
      object[lastAction.params.key] = lastAction.params.old_value;
    } else {
      delete object[lastAction.params.key];
    }
  }

  return {
    set: function (key, value) {
      const oldValue = object[key];
      object[key] = value;
      actions.push({
        name: 'set',
        has_undone: false,
        params: { key: key, old_value: oldValue, new_value: value }
      });
    },

    get: function (key) {
      return object[key];
    },

    del: function (key) {
      if (object[key] !== undefined) {
        const oldValue = object[key];
        delete object[key];
        actions.push({
          name: 'del',
          has_undone: false,
          params: { key: key, old_value: oldValue, new_value: undefined }
        });
      }
    },

    undo: function () {
      if (actions.length === 0) {
        throw new Error('No action to undo');
      }

      const lastAction = findLastAction(false);
      if (!lastAction) {
        throw new Error('No action to undo');
      }

      lastAction.has_undone = true;
      if (lastAction.name === 'set') {
        redoUndoSet(lastAction);
        actions.push({
          name: 'undo',
          params: { action: 'set', key: lastAction.params.key, old_value: lastAction.params.new_value, new_value: lastAction.params.old_value }
        });
      } else if (lastAction.name === 'del') {
        object[lastAction.params.key] = lastAction.params.old_value;
        actions.push({
          name: 'undo',
          params: { action: 'set', key: lastAction.params.key, old_value: undefined, new_value: lastAction.params.old_value }
        });
      }
    },

    redo: function () {
      if (actions.length === 0) {
        throw new Error('No action to redo');
      }

      const lastAction = actions[actions.length - 1];
      if (lastAction.name !== 'undo') {
        throw new Error('Redo must follow undo');
      }

      const lastDelSetAction = findLastAction(true);
      if (lastDelSetAction) {
        lastDelSetAction.has_undone = false;
      }

      if (lastAction.params.action === 'set') {
        redoUndoSet(lastAction);
        actions.pop();
      } else if (lastAction.params.action === 'del') {
        object[lastAction.params.key] = lastAction.params.old_value;
        actions.pop();
      }
    }
  };
}