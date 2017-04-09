const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

beforeEach((done) => {
  Todo.remove({}).then(()=>{
    done()
  });
});

describe('POST /todos', () =>{
  it('should creat a new todo', (done) => {
    var text = 'test';
    request(app)
     .post('/todos')
     .send({text})
     .expect(200)
     .expect((res) => {
       expect(res.body.text).toBe(text);
     })
     .end((err, res) =>{
       if (err) {
         return done(err);
       }
       Todo.find().then((todos)=> {
         expect(todos.leght).toBe(1);
         expect(todos[0].text).toBe(text);
         done();
       }).catch((e) => done(e));
     });
  });
});
