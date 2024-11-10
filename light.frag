/**
* @author Edgar Jose Donoso Mansilla (e.donosomansilla)
* @file light.frag
* @course CS200
* @assignment 7
*/

#version 130

in vec2 interp_world_position;
in vec2 interp_texcoord;

uniform vec4 light_position;
uniform float light_radius;
uniform float light_factor;
uniform float ambient_factor;
uniform sampler2D usampler;

out vec4 frag_color;

void main() {
    vec4 base_color = texture(usampler, interp_texcoord);

    vec2 pixel_to_light = light_position.xy - interp_world_position;
    float distance_sq = dot(pixel_to_light, pixel_to_light);

    float spotlight = min((light_radius * light_radius) / distance_sq, 1);
    float total_light = spotlight * light_factor + ambient_factor;

    frag_color = total_light * base_color;
}

// vim: set ft=glsl:
