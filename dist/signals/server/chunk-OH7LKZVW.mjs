import './polyfills.server.mjs';
import{a as S,c as _}from"./chunk-KQ6YT3QC.mjs";import{a as v,b as C,c as y,d as w,e as x}from"./chunk-IO7KP7WQ.mjs";import{e as k}from"./chunk-RSENUCY2.mjs";import"./chunk-GTSSCL6B.mjs";import"./chunk-C3US4MRV.mjs";import"./chunk-SJWONVU4.mjs";import{Fa as l,Qa as p,ab as u,bb as f,ca as s,cb as g,db as r,eb as i,fb as M,gb as F,ib as h,la as d,ma as c,qb as b,rb as a,tb as T,wb as E}from"./chunk-XZILFW5L.mjs";import"./chunk-VVCT4QZE.mjs";function A(n,t){if(n&1&&(r(0,"li"),a(1),i()),n&2){let I=t.$implicit;l(),T(" ",I," ")}}var P=(()=>{let t=class t{constructor(){this.todoName="",this.todos=p([])}addTodo(e){let o=e.value;this.updateTodos(o),this.resetAndFocus(e)}updateTodos(e){this.todos.update(o=>[e,...o])}resetAndFocus(e){e.value="",e.focus()}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=s({type:t,selectors:[["app-signal-ejemplo5"]],standalone:!0,features:[E],decls:12,vars:0,consts:[["todo",""],["matInput","","name","todo"],["mat-raised-button","","color","",2,"background-color","#b53f86","color","white",3,"click"]],template:function(o,m){if(o&1){let j=F();r(0,"h2"),a(1,"Ejemplo 5 - Todo List con se\xF1ales escribibles"),i(),r(2,"mat-form-field")(3,"mat-label"),a(4,"Nombre de la tarea"),i(),M(5,"input",1,0),i(),r(7,"button",2),h("click",function(){d(j);let D=b(6);return c(m.addTodo(D))}),a(8,` Agregar Tarea
`),i(),r(9,"ul"),f(10,A,2,1,"li",null,u),i()}o&2&&(l(10),g(m.todos()))},dependencies:[k,y,C,v,x,w,_,S],changeDetection:0});let n=t;return n})();export{P as default};
