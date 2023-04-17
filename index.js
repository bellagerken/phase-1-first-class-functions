function receivesAFunction(cb){
  return cb()
}

function returnsANamedFunction(thing){
  return function thing(){
    return 'thing'
  }
}
    
function returnsAnAnonymousFunction(){
  return function (){
    return 'thing'
  }
}