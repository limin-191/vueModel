<template>
	<div>
		<el-table :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
			style="width: 100%" :row-class-name="tableRowClassName">
			<el-table-column label="角色id" prop="date">
			</el-table-column>
			<el-table-column label="姓名" prop="name">
			</el-table-column>
			</el-table-column>
			      <el-table-column
			        prop="address"
			        label="地址">
			      </el-table-column>
			
			<el-table-column align="right">
				<template slot="header" slot-scope="scope">
					<el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
				</template>
				<template slot-scope="scope" fixed="right">  <!-- fixed="right"右侧按钮固定 -->
					<el-button size="mini" type="success" @click="handleModify(scope.$index, scope.row)">修改</el-button>
					<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
					<el-button size="mini" type="warning" @click="handleDelete(scope.$index, scope.row)">查看权限</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination background layout="prev, pager, next" :total="toal" :page-size="pageSize">
		</el-pagination>

	</div>
</template>处理中心
我的工作台


<script>
	export default {
		data() {
			return {
				pageSize: 4,      //每行条数
				toal: 20,         //总数
				tableData: [{
						date: '2016-05-02',
						name: '张小虎',
						address: '上海市普陀区金沙江路 1518 弄'
					}, {
						date: '2016-05-04',
						name: '余小虎',
						address: '上海市普陀区金沙江路 1517 弄'
					},
					{
						date: '2016-05-01',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1519 弄'
					},
					{
						date: '2016-05-01',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1519 弄'
					},
					{
						date: '2016-05-01',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1519 弄'
					},
					{
						date: '2016-05-01',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1519 弄'
					},
					{
						date: '2016-05-03',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1516 弄'
					}
				],
				search: ''
			}
		},

		methods: {
			handleModify(index, row) {
				console.log(index, row);
			},
			handleDelete(index, row) {
				console.log(index, row);
			},


			tableRowClassName({
				row,
				rowIndex
			}) {
				if (rowIndex % 2 === 0) {
					return 'warning-row';
				} else {
					return 'success-row';
				}
			}
		},
		watch:{
			
		}
	}
</script>

<style>
	.el-table .warning-row {
		background: greenyellow;
	}

	.el-table .success-row {
		background: gray;
	}
</style>
