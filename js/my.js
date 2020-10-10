// 生成从min到max的随机数
function random_num(min, max)
{
	var Range = max - min;
	var Rand = Math.random();
	return (parseInt(Math.round(Rand * Range),10) + parseInt(min, 10));
}

// 是否为正整数
function isPositiveInteger(s){
	var re = /^[0-9]+$/;
	return re.test(s);
}

// 点击发送按钮触发函数
function send_info()
{
	// 清空文本框
	$("#info").val("");
	// 获取各个输入框的值
	var min = $("#min").val();
	var max = $("#max").val();
	var num = $("#num").val();
	//console.log(min + " " + max + " " + num);
	var out = 0;

	// 正整数校验
	if(isPositiveInteger(min) && isPositiveInteger(max) && isPositiveInteger(num))
	{

	}
	else
	{
		$("#info").val("请输入 正整数");
		return;
	}

	// 逻辑校验
	if(max - min < 0)
	{
		$("#info").val("最小值 不能大于 最大值");
		return;
	}

	// 判断复选框的选中情况
	if ($("#repeat").get(0).checked) 
	{
		for(var i=0; i<num; i++)
		{
			// 生成随机值
			out = random_num(min, max);
			// 将结果写入文本框
			$("#info").val($("#info").val() + " " + out);
		}
	}
	else
	{
		// 逻辑校验
		if(num > (max - min + 1))
		{
			$("#info").val("生成个数 不能大于 最大值减最小值的差");
			return;
		}

		// 定义集合
		let set = new Set();
		// 循环条件为集合的长度与num不相等
		while(num != set.size)
		{
			// 生成随机值
			out = random_num(min, max);
			// 加入集合
			set.add(out);
		}

		// 将结果写入文本框
		for(const item of set)
		{
			$("#info").val($("#info").val() + " " + item);
		}
	}
}