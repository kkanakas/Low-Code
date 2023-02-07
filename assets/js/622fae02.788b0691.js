"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4477],{3905:(e,t,A)=>{A.d(t,{Zo:()=>l,kt:()=>F});var o=A(67294);function i(e,t,A){return t in e?Object.defineProperty(e,t,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[t]=A,e}function a(e,t){var A=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),A.push.apply(A,o)}return A}function r(e){for(var t=1;t<arguments.length;t++){var A=null!=arguments[t]?arguments[t]:{};t%2?a(Object(A),!0).forEach((function(t){i(e,t,A[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(A)):a(Object(A)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(A,t))}))}return e}function n(e,t){if(null==e)return{};var A,o,i=function(e,t){if(null==e)return{};var A,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)A=a[o],t.indexOf(A)>=0||(i[A]=e[A]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)A=a[o],t.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(e,A)&&(i[A]=e[A])}return i}var p=o.createContext({}),f=function(e){var t=o.useContext(p),A=t;return e&&(A="function"==typeof e?e(t):r(r({},t),e)),A},l=function(e){var t=f(e.components);return o.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},w=o.forwardRef((function(e,t){var A=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=n(e,["components","mdxType","originalType","parentName"]),s=f(A),w=i,F=s["".concat(p,".").concat(w)]||s[w]||c[w]||a;return A?o.createElement(F,r(r({ref:t},l),{},{components:A})):o.createElement(F,r({ref:t},l))}));function F(e,t){var A=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=A.length,r=new Array(a);r[0]=w;var n={};for(var p in t)hasOwnProperty.call(t,p)&&(n[p]=t[p]);n.originalType=e,n[s]="string"==typeof e?e:i,r[1]=n;for(var f=2;f<a;f++)r[f]=A[f];return o.createElement.apply(null,r)}return o.createElement.apply(null,A)}w.displayName="MDXCreateElement"},71493:(e,t,A)=>{A.r(t),A.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>s,frontMatter:()=>a,metadata:()=>n,toc:()=>f});var o=A(87462),i=(A(67294),A(3905));const a={sidebar_position:1,title:"3. Create a GitHub Repo"},r=void 0,n={unversionedId:"prodev-6/step-3",id:"prodev-6/step-3",title:"3. Create a GitHub Repo",description:"Working as part of the PrioritZ fusion team you will be configuring GitHub Actions using the Power Platform Build Tools to automate the team\u2019s deployments.",source:"@site/docs/prodev-6/step-3.md",sourceDirName:"prodev-6",slug:"/prodev-6/step-3",permalink:"/Low-Code/docs/prodev-6/step-3",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"3. Create a GitHub Repo"},sidebar:"tutorialSidebar",previous:{title:"2. Configure Service Principal",permalink:"/Low-Code/docs/prodev-6/step-2"},next:{title:"4. Export and Branch",permalink:"/Low-Code/docs/prodev-6/step-4"}},p={},f=[{value:"3.1 Create Repository",id:"31-create-repository",level:2},{value:"3.2 Create Repo Secret",id:"32-create-repo-secret",level:2},{value:"3.3 Manage Permission",id:"33-manage-permission",level:2}],l={toc:f};function s(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"LAB SCENARIO",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Working as part of the PrioritZ fusion team you will be configuring GitHub Actions using the Power Platform Build Tools to automate the team\u2019s deployments."),(0,i.kt)("p",{parentName:"admonition"},"In ",(0,i.kt)("strong",{parentName:"p"},"Exercise 3")," you will create a GitHub repository and add repository secrets.")),(0,i.kt)("admonition",{title:"Important",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You will need ",(0,i.kt)("strong",{parentName:"p"},"GitHub account")," in this lab")),(0,i.kt)("h2",{id:"31-create-repository"},"3.1 Create Repository"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Navigate to ",(0,i.kt)("a",{parentName:"li",href:"https://aka.ms/lowcode-february/workshop/github"},(0,i.kt)("strong",{parentName:"a"},"GitHub"))),(0,i.kt)("li",{parentName:"ol"},"Sign in or signup for GitHub."),(0,i.kt)("li",{parentName:"ol"},"\ud83d\udc49 New repository. Enter PrioritZ for Repository name, select Public, check the Add a README file, and click Create repository.")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"\ud83d\udc49 Settings. Go to the Security section, expand Secrets and select Actions. ")),(0,i.kt)("admonition",{title:"Important",type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"The values you provide will not be visible after you create the item so take your time to get the values correct.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Lab-05 Image",src:A(89729).Z,width:"496",height:"157"}),"\n",(0,i.kt)("img",{alt:"Lab-05 Image",src:A(52083).Z,width:"365",height:"162"})),(0,i.kt)("h2",{id:"32-create-repo-secret"},"3.2 Create Repo Secret"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\ud83d\udc49 New repository secret. \ud83d\udc49 PowerPlatformAppID for Name and paste the Application (client) ID from your notepad in the Value field and click Add secret."),(0,i.kt)("li",{parentName:"ol"},"\ud83d\udc49 New repository secret again. \ud83d\udc49 PowerPlatformClientSecret for Name and paste the secret Value from your notepad in the Value field and click Add secret."),(0,i.kt)("li",{parentName:"ol"},"\ud83d\udc49 New repository secret again. \ud83d\udc49 PowerPlatformTenantID for Name and paste the secret Tenant ID from your notepad in the Value field and click Add secret."),(0,i.kt)("li",{parentName:"ol"},"\ud83d\udc49 New repository secret again. \ud83d\udc49 PowerPlatformDevUrl for Name and paste the secret Dev environment URL from your notepad in the Value field and click Add secret."),(0,i.kt)("li",{parentName:"ol"},"\ud83d\udc49 New repository secret one more time. \ud83d\udc49 PowerPlatformTestUrl for Name and paste the secret Test environment URL from your notepad in the Value field and click Add secret.")),(0,i.kt)("admonition",{title:"Note",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You should now have 5 repository secrets."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("img",{alt:"Lab-05 Image",src:A(50841).Z,width:"527",height:"262"}))),(0,i.kt)("h2",{id:"33-manage-permission"},"3.3 Manage Permission"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the left navigation in the Code and Automation section expand Actions and select General.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Scroll down to the Workflow Permissions section. \ud83d\udc49 Read and write permissions. \ud83d\udc49 Save"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Lab-05 Image",src:A(51889).Z,width:"624",height:"269"})),(0,i.kt)("admonition",{title:"Note",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Do not navigate away from this page.")))}s.isMDXComponent=!0},89729:(e,t,A)=>{A.d(t,{Z:()=>o});const o=A.p+"assets/images/lab05 (16)-1ae035f8dcdb76acfaf7f913f333e3a9.jpg"},52083:(e,t,A)=>{A.d(t,{Z:()=>o});const o="data:image/jpeg;base64,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"},50841:(e,t,A)=>{A.d(t,{Z:()=>o});const o=A.p+"assets/images/lab05 (18)-e0a43b9372831e4bafd739208b5e7694.jpg"},51889:(e,t,A)=>{A.d(t,{Z:()=>o});const o=A.p+"assets/images/lab05 (19)-beff755a6cda0087c2a3722326dc5acf.jpg"}}]);