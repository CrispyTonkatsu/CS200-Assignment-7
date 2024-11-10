#version 130

in vec2 interp_world_position;
in vec2 interp_texcoord;

uniform vec4 light_position;
uniform float light_radius;
uniform float light_factor;
uniform sampler2D usampler;

out vec4 frag_color;

void main() {
    vec4 base_color = texture(usampler, interp_texcoord);
}

// vim: set ft=glsl:
