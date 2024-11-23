return {
	{
		type = "coreclr",
		name = "Project Launch",
		request = "launch",
		program = "/path/to/your/project/bin/Debug/your_app.dll",
	},
	{
		type = "coreclr",
		name = "Attach to Process",
		request = "attach",
		processId = function()
			return vim.fn.input("Enter process ID: ")
		end,
	},
}
