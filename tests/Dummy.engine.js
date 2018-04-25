"use strict";

const uuid = require('node-uuid');

const NucleusEngine = require('../library/Engine.nucleus');

class DummyEngine extends NucleusEngine {

  constructor () {
    super('Dummy');
  }

  /**
   * Executes a simple dummy.
   *
   * @Nucleus ActionName ExecuteSimpleDummy
   *
   * @returns {Promise<void>}
   */
  executeSimpleDummy () {

    return Promise.resolve({ AID: uuid.v1() });
  }

  /**
   * Executes a simple dummy.
   *
   * @Nucleus ActionName ExecuteSimpleDummyWithArguments
   *
   * @argument {String} AID1
   * @argument {String} AID2
   *
   * @returns {Promise<{ AID1: String, AID2: String }>}
   */
  executeSimpleDummyWithArguments (AID1, AID2) {

    return Promise.resolve({ AID1, AID2 });
  }

  /**
   * Executes a simple dummy and broadcast an event after completion.
   *
   * @Nucleus ActionName ExecuteSimpleDummyWithEvent
   * @Nucleus EventName SimpleDummyWithEventExecuted
   *
   * @returns {Promise<void>}
   */
  executeSimpleDummyWithEvent () {

    return Promise.resolve();
  }

  /**
   * Executes a simple dummy which has a complex signature.
   *
   * @Nucleus ActionName ExecuteSimpleDummyWithComplexSignature
   * @Nucleus ActionAlternativeSignature AID1 AID3
   *
   * @argument {String} AID1
   * @argument {Number} [AID2]
   * @argument {Boolean[]} [AID3]
   *
   * @returns {Promise<void>}
   */
  executeSimpleDummyWithComplexSignature (AID1, AID2) {

    return Promise.resolve();
  }

}

module.exports = DummyEngine;