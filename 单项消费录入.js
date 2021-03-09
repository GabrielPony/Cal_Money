// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-blue; icon-glyph: magic;
//匹配文本中的中文数字// 
var text = args.shortcutParameter;
var text = String(text);
var num_ch = new Array(9);
var num_ch = ["一","二","三","四","五","六","七","八","九","error"];
var spend_project = 0;
//匹配输入的中文数字并化成阿拉伯数字
function get_string(text){
	mid_flag = 0;
 	var reg_ch = '[\u96f6\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341\u767e\u5343\u4e07]';
	if(text.match(reg_ch)){	
		res = text.match(reg_ch);		
		for (var i=0;i<9;i++){
			if(!num_ch[i].localeCompare(res))			{
				res = i + 1;
			}
		}	
		console.log("Has Chinese");
	}
	else{
		res = text.replace(/[^\d.]/g,"");
		console.log("No Chinese");
	}
	console.log(res);
	return res;
}
//匹配花费项目	
function get_project(text){
 	var reg = ["吃饭","游戏","淘宝","京东","基金","看电影","其他"];
	for(var i = 0; i < reg.length; i ++){
		if(text.match(reg[i])){
			res = text.match(reg[i]);
			console.log(res)
			return res;
		}
	}
	return reg[reg.length - 1];
}

let pro = get_project(text);
let num = get_string(text);	
spend_project= pro + "：                   ¥" +num;
console.log(spend_project);
Script.setShortcutOutput(spend_project);
Script.complete();

	
		
