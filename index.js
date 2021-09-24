function receivesAFunction(callback){
    return callback()
}

receivesAFunction(function() {"spy"})

function returnsANamedFunction(){
        return function namedFunction(){
            "returning something"
        }
}

function returnsAnAnonymousFunction(){
    return function(){
        "I am an anonymous function"
    }
}
