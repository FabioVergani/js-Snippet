EventTarget.prototype.addAnimationListener = function(type, listener, useCapture, wantsUntrusted) {
 var vendors = [['', '', 'webkit', 'o', 'MS'],[false, false, true, false, true]];
 var prefix = 'Animation';
 var animationTypes = ['Start', 'Iteration', 'End'];
 var animationType = false;
 for(var i = animationTypes.length - 1; (i >= 0) && !animationType; i--) {
  animationType = (type.toLowerCase() === animationTypes[i].toLowerCase()) ? i : false;
 }

 if(animationType === false) {
  console.log('Error: The AnimationType "' + type + '" doesn\'t exist!');
  return undefined;
 }

 animationType = prefix + animationTypes[animationType];
 for(var i = vendors[0].length - 1; i >= 0; i--) {
  this.addEventListener(vendors[0][i] + (vendors[1][i] ? animationType : animationType.toLowerCase()), listener, useCapture, wantsUntrusted);
 }

 return true;
}
