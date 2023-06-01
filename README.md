JSX ? 
    - JS + html 
    - DOM read JSX & render 
    - React.createElement() => reactElement(type, props, children,..)
    - ReactDom just render reactElenment
Prop ? 
* Is object with 
+ reactElements => atribute HTMl
- Class, for => classname, htmlfor
- Tuan theo quy tac
+ reactComponents =>
- Arguments 
- Read only
- No rule for name
- Cant change data from props con
+ Props key 
- 1 key for 1 CPN
- Performer
- Value of key is one 
- Don't use index is key (problem to CRUD items)
* Notice (
    - In CPN co the truyen nhieu cap from dad to son (khong nen truyen nhieu props qua nhieu` cay)
    - PropsType to check typedata
)

Components ? 
- Function Components va ClassComponents 
- Gom co props (like arguments), state, render 
    + Function (){
        return (
            => return la bat buoc return JSX or null
        )
    }
=> Nhan props xu li logic and render qua JSX    

- Top_dow_data_flow:
CPN dad to son nhu 1 props, khi gia tri cua props thay doi thi components con se duoc render 

- lifting state up:
Update data from CPN dad to son 

- Co 2 loai component de tach biet logic xu li va render giao dien cua 1 component
    + Components container
    + Pressentional Component

- Cac khia cach khac cua 1 CPN ( lifeCycle, HOC, renderProps,..)

