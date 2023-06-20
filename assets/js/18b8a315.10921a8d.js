"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[894],{88273:e=>{e.exports=JSON.parse('{"functions":[{"name":"Alert","desc":"This method can be used to send an alert, these alerts can be customized by color and duration.\\n\\n**Example:**\\n```lua\\nMapLib:Alert(\\"Hello world!\\", Color3.new(255, 255, 255), 3)\\n-- Creates an alert with the given message with the color white and the duration of 3 seconds.\\n```\\n:::tip\\nYou can pass the color argument as string and it\'ll still work, just make sure to use a common color name!\\n```lua\\nMapLib:Alert(\\"Hello world!\\", \\"red\\", 3)\\n:::","params":[{"name":"message","desc":"","lua_type":"string"},{"name":"color","desc":"","lua_type":"Color3 | string"},{"name":"length","desc":"","lua_type":"number?"}],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","since":"0.2.4","source":{"line":99,"path":"src/init.lua"}},{"name":"ChangeMusic","desc":"This method can be used to change the current music playing in a map, this also replicates to people spectating.\\n\\n**Example:**\\n```lua\\nMapLib:ChangeMusic(12245541717, 1, 5)\\n-- Changes the currently playing music to volume 1 and starts at 5 seconds in.","params":[{"name":"musicId","desc":"","lua_type":"number"},{"name":"volume","desc":"","lua_type":"number?"},{"name":"startTick","desc":"","lua_type":"number?"}],"returns":[],"function_type":"method","since":"0.4","source":{"line":116,"path":"src/init.lua"}},{"name":"GetButtonEvent","desc":"This method can be used to run functions once a specific button has been pressed.\\n\\n**Example:**\\n```lua\\nMapLib:GetButtonEvent(5):Connect(function(player: Player?)\\n\\tMapLib:Alert(\\"Button 5 was pressed!\\", Color3.fromRGB(255, 255, 255), 4)\\nend)\\n```\\n:::note\\nThe `player` argument here is the player that pressed the button or nil if the button was activated automatically.\\n:::\\n:::tip\\nPath buttons work the same as normal buttons, you just need to give a valid button ID in quotation marks (e.g. \\"6A\\")\\n\\n**Example:**\\n```lua\\nMapLib:GetButtonEvent(\\"6A\\"):Connect(function(player: Player?)\\n\\tMapLib:Alert(\\"Button 6A was pressed!\\", Color3.fromRGB(255, 0, 0), 5)\\nend)\\n```\\n:::","params":[{"name":"buttonId","desc":"","lua_type":"number | string"}],"returns":[{"desc":"","lua_type":"any\\r\\n"}],"function_type":"method","realm":["Server"],"since":"0.2.4","source":{"line":149,"path":"src/init.lua"}},{"name":"Survive","desc":"This method can be used to make a player survive the round without touching the ExitRegion.\\n\\n**Example:**\\n```lua\\nlocal Players = game:GetService(\\"Players\\")\\nlocal MapLib = game.GetMapLib:Invoke()()\\n\\nscript.Parent.Touched:Connect(function(other)\\n\\tlocal player = Players:GetPlayerFromCharacter(other.Parent)\\n\\tif player then\\n\\t\\tMapLib:Survive(player)\\n\\tend\\nend)","params":[{"name":"player","desc":"","lua_type":"Player"}],"returns":[],"function_type":"method","realm":["Server"],"since":"0.8","source":{"line":186,"path":"src/init.lua"}},{"name":"SetLiquidType","desc":"This method can be used to change the state of a liquid. There are 3 default types you can choose, these are `water`, `acid` and `lava`.\\n\\n**Example:**\\n```lua\\nMapLib:SetLiquidType(map.Liquid1, \\"lava\\")\\n-- Changes the liquidType of map.Liquid1 to lava.\\n```\\n:::tip\\nYou can make your own liquid type in your map\'s `Settings.Liquids` folder. For example a custom liquid type named \\"bromine\\" will have the usage:\\n```lua\\nMapLib:SetLiquidType(map.LiquidWater, \\"bromine\\")\\n```\\n:::","params":[{"name":"liquid","desc":"","lua_type":"BasePart"},{"name":"liquidType","desc":"","lua_type":"string"}],"returns":[],"function_type":"method","since":"0.2.4","source":{"line":214,"path":"src/init.lua"}},{"name":"Move","desc":"Used to move `PVInstances`.\\n\\n**Example:**\\n```lua\\nMapLib:Move(map.MovingPart1, Vector3.new(12, 0, 0), 3)\\n-- Moves map.MovingPart1 along the X axis 12 studs and finishes moving after 3 seconds\\n```","params":[{"name":"moveable","desc":"","lua_type":"PVInstance"},{"name":"movement","desc":"","lua_type":"Vector3"},{"name":"duration","desc":"","lua_type":"number?"}],"returns":[],"function_type":"method","since":"0.9","source":{"line":265,"path":"src/init.lua"}},{"name":"MoveRelative","desc":"Used to move `PVInstances`.\\n\\n**Example:**\\n```lua\\nMapLib:MoveRelative(map.MovingPart2, Vector3.new(12, 0, 0), 5)\\n--- Moves map.MovingPart2 relative to its rotation.\\n```","params":[{"name":"moveable","desc":"","lua_type":"PVInstance"},{"name":"movement","desc":"","lua_type":"Vector3"},{"name":"duration","desc":"","lua_type":"number?"}],"returns":[],"function_type":"method","since":"0.9","source":{"line":279,"path":"src/init.lua"}},{"name":"GetPlayers","desc":"This method returns a table containing players currently in a map.","params":[],"returns":[{"desc":"","lua_type":"{ Player }\\r\\n"}],"function_type":"method","since":"0.9","source":{"line":292,"path":"src/init.lua"}},{"name":"GetFeature","desc":"This method is used to get any features listed in the features list.","params":[{"name":"name","desc":"","lua_type":"string"}],"returns":[],"function_type":"method","since":"0.5.6","source":{"line":303,"path":"src/init.lua"}}],"properties":[{"name":"map","desc":"This is the map model.","lua_type":"Model","since":"0.5","readonly":true,"source":{"line":45,"path":"src/init.lua"}},{"name":"RoundEnding","desc":"A `RBXScriptSignal` that is fired when a map ends.\\n\\n**Example:**\\n```lua\\nMapLib.MapEnded:Connect(function()\\n\\tMapLib:Alert(\\"The round has ended\\", Color3.new(0, 255, 0), 2.5)\\nend)\\n```","lua_type":"RBXScriptSignal","since":"0.7","source":{"line":59,"path":"src/init.lua"}},{"name":"_MapHandler","desc":"","lua_type":"any","private":true,"readonly":true,"source":{"line":64,"path":"src/init.lua"}}],"types":[],"name":"MapLib","desc":"This page contains all the common and beginner scripting methods with appropriate examples when necessary.","source":{"line":37,"path":"src/init.lua"}}')}}]);