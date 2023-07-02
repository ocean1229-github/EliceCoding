db.getUsersPromise()
.then((users) => {
    return promise1(users);
})
.then(r1 => promise2(r1))
// .catch(...);

