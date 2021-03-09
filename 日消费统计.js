// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: yellow; icon-glyph: magic;
var text = args.shortcutParameter;
var text = String(text);
var cal_result;       
var end_flag = "-------------------------";
//筛选本日消费并总计
function cal_total(text){
	var res = 0;
	day_data = text.match(/\d+(\.\d+)?/g);
	day_data = day_data.map(Number);
	for(var i=0; i<day_data.length;i++){
		res = day_data[i] + res;
	}
	res = res.toFixed(2);
	console.log(day_data);
	return res;
}
//寻找每天从划线开始的日消费
function find_end(){
	res = text.lastIndexOf("-------------------------");	res = text.substring(res + end_flag.length);
	console.log(res)
	return res;
}
//函数调用运行
function sys_run(){
	get_data = find_end();
	cal_result = cal_total(get_data);
}

sys_run();
Script.setShortcutOutput(cal_result);
Script.complete();
