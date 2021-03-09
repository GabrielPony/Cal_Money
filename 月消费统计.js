// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: pink; icon-glyph: magic;
var text = args.shortcutParameter;
var text = String(text);
var the_date=new Date();
var sum_money = 0 ;
//获取当前日期
function get_date(){
	var year = the_date.getFullYear();
	var month = the_date.getMonth()+1;
	month_the_date = year+"/"+month;
// 	console.log(month_the_date);
	return month_the_date;
}
//匹配当月所有日的消费记录
function find_mon_spend(){
	var mid_text = 0;
	var res = 0;
	res =text.lastIndexOf(get_date());
	mid_text = text.substring(res);
	text = text.replace(mid_text,"");	
// 	console.log(text);	
	return {res,mid_text};
}
//筛选提取出的月消费
function sum_mon_spend(){
	res = 0;
	sum_text=0;
	while(res != -1){
		info = find_mon_spend();
		res = info.res;
		info_text=info.mid_text.substring(8);
		if(info_text.lastIndexOf("月消费")!=-1){
			info_text = "error";	
		}
		sum_text = sum_text + info_text;
	}	
	sum_text = sum_text.replace(info_text,"");
	return sum_text;	
}
//进行总和运算
function cal_money(){
	var res = 0;
	final_text = sum_mon_spend();
	final_text = final_text.match(/\d+(\.\d+)?/g);
	final_data = final_text.map(Number);
	for(var i=0; i<final_data.length;i++){
		res = final_data[i] + res;
		console.log(res);
	}
	res = res.toFixed(2);
	console.log(res)
	return res;
}
//函数调用运行
function sys_run(){
	sum_money = String(cal_money());
	now_date = String(get_date());
	output = now_date+"    月消费：¥"+ sum_money;
	return output;
}
output = sys_run();
Script.setShortcutOutput(output);
Script.complete();