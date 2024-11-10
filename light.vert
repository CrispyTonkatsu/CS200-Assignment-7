/**
* @author Edgar Jose Donoso Mansilla (e.donosomansilla)
* @file light.vert
* @course CS200
* @assignment 7
*/

#version 130

in vec4 position;
in vec2 texcoord;

uniform mat4 object_to_world;
uniform mat4 world_to_ndc;

out vec2 interp_world_position;
out vec2 interp_texcoord;

void main() {
    interp_texcoord = texcoord;

    vec4 world_position = object_to_world * position;
    interp_world_position = world_position.xy;
    gl_Position = world_to_ndc * world_position;
}

// vim: set ft=glsl:
