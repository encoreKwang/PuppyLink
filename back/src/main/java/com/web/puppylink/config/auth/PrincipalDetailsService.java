package com.web.puppylink.config.auth;

import com.web.puppylink.model.Member;
import com.web.puppylink.repository.UserRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component("userDetailsService")
public class PrincipalDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    public PrincipalDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return userRepository.findAuthoritiesByEmail(email)
                .map(member -> createUser(email,member))
                .orElseThrow(() -> new UsernameNotFoundException(email + " -> 데이터베이스에서 찾을 수 없습니다."));
    }

    private User createUser(String email, Member member) {
        if(!member.isActivated()) {
            throw new RuntimeException(email + " -> 활성화되어 있지 않습니다.");
        }

        List<GrantedAuthority> grantedAuthorityList = member.getAuthorities().stream()
                .map(authority -> new SimpleGrantedAuthority(authority.getAuthorityNo()))
                .collect(Collectors.toList());

        return new User(member.getEmail(), member.getPassword(), grantedAuthorityList);
    }

}
