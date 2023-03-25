const counterValue = function ({ rootSelector, value = 0, step = 1 } = {}) {
  this._value = value;
  this._step = step;
  this._refs = this._getRefs(rootSelector);
  this._bindEvents();
};
counterValue.prototype._getRefs = function (rootSelector) {
  console.log(rootSelector);
  const refs = {};
  refs.conteiner = document.querySelector(rootSelector);
  console.log(refs.conteiner);
  refs.decrementBtn = refs.conteiner.querySelector("[data-action = decrement]");
  refs.incrementBtn = refs.conteiner.querySelector("[data-action = increment]");
  refs.value = refs.conteiner.querySelector("#value");
  return refs;
};

counterValue.prototype._bindEvents = function () {
  this._refs.decrementBtn.addEventListener("click", () => {
    this.decrement();
    console.log("counterValue.prototype._bindEvents -> this", this);
    this.updateValue();
  });
  this._refs.incrementBtn.addEventListener("click", () => {
    this.increment();
    console.log("counterValue.prototype._bindEvents -> this", this);
    this.updateValue();
  });
};

counterValue.prototype.updateValue = function () {
  this._refs.value.textContent = this._value;
};

counterValue.prototype.decrement = function () {
  this._value -= this._step;
};

counterValue.prototype.increment = function () {
  this._value += this._step;
};

new counterValue({ rootSelector: "#counter", step: 1 });
