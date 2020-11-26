
export var json = {
    // title: "치즈 취향을 알아보기",
    showProgressBar: "bottom",
    // showTimerPanel: "top",
    // maxTimeToFinishPage: 10,
    // maxTimeToFinish: 25,
    firstPageIsStarted: true,
    startSurveyText: "Start Recommend",
    pages: [
        { 
            questions: [ 
                {
                    type: "html", 
                    html: "치즈를 추천받아보세요. <br/>AI를 통해 고객님의 치즈 취향을 분석해드립니다. <br/><b>'Start Recommend'</b>버튼을 눌러 시작해주세요.",
                } 
            ] 
        },
        {   
            title: "양식 중에 어떤 음식을 좋아하시나요?",
            questions: [
                {
                    type:"imagepicker", name:"chooseFood_1", title:"아래 사진들 중에서 중복해서 선택해주세요",
                    colCount: 5, isRequired: true,
                    choices:[
                        {value: "라자냐", imageLink: "https://i.pinimg.com/236x/fa/17/97/fa1797e94b8305566e628e55c0de142c.jpg", height: "100px"},
                        {value: "피자", imageLink: "https://i.pinimg.com/236x/ca/40/8e/ca408eb24ee259b8195f09971899b4a6.jpg"},
                        {value: "리소토",  imageLink: "https://i.pinimg.com/564x/8a/5f/86/8a5f86389c848d2dea572f15efae71e4.jpg"},
                        {value: "베이컨", imageLink: "https://i.pinimg.com/236x/80/f1/01/80f101f196ff753b51bdac5b680609bf.jpg"},
                        {value: "파스타", imageLink: "https://i.pinimg.com/236x/ba/a8/74/baa874b693fe434b07b25f8ec2ddea39.jpg"},
                        {value: "맥앤치즈", imageLink: "https://i.pinimg.com/236x/63/99/a1/6399a10f254ede8c4653022e31acc8b6.jpg"},
                        {value: "그라탕", imageLink: "https://i.pinimg.com/236x/e3/3d/5b/e33d5bac2bd0c7091828eccc010f13c6.jpg"},
                        {value: "스테이크", imageLink: "https://i.pinimg.com/236x/ea/ad/37/eaad37156f9c488b7e52c0eb4caeaab8.jpg"},
                        {value: "마르게리타 피자", imageLink: "https://i.pinimg.com/236x/9a/ce/d0/9aced00ce1bbb7d9482761a5520cea11.jpg"},
                        {value: "스프", imageLink: "https://i.pinimg.com/236x/52/b7/63/52b76318d20e152556f830b9533cf36e.jpg"},
                    
                    ]
                }
        ]},        
        {   title: "디저트 중에 어떤 음식을 좋아하시나요?",
            questions: [
            {type:"imagepicker", name:"chooseFood_2", title:"아래 사진들 중에서 중복해서 선택해주세요",
                colCount: 5, isRequired: true,
                choices:[
                    {value: "파스타", imageLink: "https://i.pinimg.com/236x/ba/a8/74/baa874b693fe434b07b25f8ec2ddea39.jpg"},
                    {value: "맥앤치즈", imageLink: "https://i.pinimg.com/236x/63/99/a1/6399a10f254ede8c4653022e31acc8b6.jpg"},
                    {value: "그라탕", imageLink: "https://i.pinimg.com/236x/e3/3d/5b/e33d5bac2bd0c7091828eccc010f13c6.jpg"},
                    {value: "스테이크", imageLink: "https://i.pinimg.com/236x/ea/ad/37/eaad37156f9c488b7e52c0eb4caeaab8.jpg"},
                    {value: "마르게리타 피자",  imageLink: "https://i.pinimg.com/236x/9a/ce/d0/9aced00ce1bbb7d9482761a5520cea11.jpg"},
                    {value: "스프", imageLink: "https://i.pinimg.com/236x/52/b7/63/52b76318d20e152556f830b9533cf36e.jpg"}
                ]
            }
        ]},        
        
        // {   title: "한식 중에 어떤 음식을 좋아하시나요?",
        //     questions: [
        //     {type:"checkbox", name:"langs",title:"Please select from the list",
        //         colCount: 4, isRequired: true,
        //         choices:["Javascript", "Java", "Python", "CSS", "PHP", "Ruby", "C++", "C", 
        //             "Shell", "C#", "Objective-C", "R", "VimL", "Go", "Perl", "CoffeeScript", 
        //             "TeX", "Swift", "Scala", "Emacs Lisp", "Haskell", "Lua", "Clojure", 
        //             "Matlab", "Arduino", "Makefile", "Groovy", "Puppet", "Rust", "PowerShell"]
        //     }
        // ]},        
        // { title: "Please enter your name and e-mail",
        //     questions: [ 
        //     {type: "text", name: "name", title: "Name:"}, 
        //     {type: "text", name: "email", title: "Your e-mail"}]
        // }
    ],
    completedHtml:"고객님의 치즈 취향을 분석 중입니다."
};



// class SurveyComponent extends Component {

//     json = {
//         title: "치즈 취향을 알아보기",
//         showProgressBar: "bottom",
//         // showTimerPanel: "top",
//         // maxTimeToFinishPage: 10,
//         // maxTimeToFinish: 25,
//         firstPageIsStarted: true,
//         startSurveyText: "Start Recommend",
//         pages: [
//             { questions: [ {type: "html", html: "You are about to start quiz by history. <br/>You have 10 seconds for every page and 25 seconds for the whole survey of 3 questions.<br/>Please click on <b>'Start Quiz'</b> button when you are ready." } ] },
//             {   title: "양식 중에 어떤 음식을 좋아하시나요?",
//                 questions: [
//                 {type:"imagepicker", name:"chooseKorean", title:"아래 사진들 중에서 중복해서 선택해주세요",
//                     colCount: 5, isRequired: true,
//                     choices:[
//                         {id: "라자냐", value: 1, imageLink: "https://i.pinimg.com/236x/fa/17/97/fa1797e94b8305566e628e55c0de142c.jpg", height: "100px"},
//                         {id: "피자", value: 1, imageLink: "https://i.pinimg.com/236x/ca/40/8e/ca408eb24ee259b8195f09971899b4a6.jpg"},
//                         {id: "리소토", value: 1, imageLink: "https://i.pinimg.com/564x/8a/5f/86/8a5f86389c848d2dea572f15efae71e4.jpg"},
//                         {id: "베이컨", value: 1, imageLink: "https://i.pinimg.com/236x/80/f1/01/80f101f196ff753b51bdac5b680609bf.jpg"}
//                         // {id: "파스타", value: 1, imageLink: "https://i.pinimg.com/236x/ba/a8/74/baa874b693fe434b07b25f8ec2ddea39.jpg"},
//                         // {id: "맥앤치즈", value: 1, imageLink: "https://i.pinimg.com/236x/63/99/a1/6399a10f254ede8c4653022e31acc8b6.jpg"},
//                         // {id: "그라탕", value: 1, imageLink: "https://i.pinimg.com/236x/e3/3d/5b/e33d5bac2bd0c7091828eccc010f13c6.jpg"},
//                         // {id: "스테이크", value: 1, imageLink: "https://i.pinimg.com/236x/ea/ad/37/eaad37156f9c488b7e52c0eb4caeaab8.jpg"},
//                         // {id: "마르게리타 피자", value: 1, imageLink: "https://i.pinimg.com/236x/9a/ce/d0/9aced00ce1bbb7d9482761a5520cea11.jpg"},
//                         // {id: "스프", value: 1, imageLink: "https://i.pinimg.com/236x/52/b7/63/52b76318d20e152556f830b9533cf36e.jpg"},
                    
//                     ]
//                 }
//             ]},        
            
//             // {   title: "한식 중에 어떤 음식을 좋아하시나요?",
//             //     questions: [
//             //     {type:"checkbox", name:"langs",title:"Please select from the list",
//             //         colCount: 4, isRequired: true,
//             //         choices:["Javascript", "Java", "Python", "CSS", "PHP", "Ruby", "C++", "C", 
//             //             "Shell", "C#", "Objective-C", "R", "VimL", "Go", "Perl", "CoffeeScript", 
//             //             "TeX", "Swift", "Scala", "Emacs Lisp", "Haskell", "Lua", "Clojure", 
//             //             "Matlab", "Arduino", "Makefile", "Groovy", "Puppet", "Rust", "PowerShell"]
//             //     }
//             // ]},        
//             // { title: "Please enter your name and e-mail",
//             //     questions: [ 
//             //     {type: "text", name: "name", title: "Name:"}, 
//             //     {type: "text", name: "email", title: "Your e-mail"}]
//             // }
//         ],
//         completedHtml:""
//     };
    
//     onComplete(survey, options) {
//         console.log("Survey results: " + JSON.stringify(survey.data))
//     }

//     render() {
//         var model = new Survey.Model(this.json)
//         return (<Survey.Survey model={model} onComplete={this.onComplete}/>)

//     }
// }