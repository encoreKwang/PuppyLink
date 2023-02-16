package com.web.puppylink.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BoardTokenDto {
    private String accessToken;
    private String refreshToken;
}
