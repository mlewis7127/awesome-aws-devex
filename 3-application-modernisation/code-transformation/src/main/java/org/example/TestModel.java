package org.example;

import java.util.Date;

import lombok.Builder;
import lombok.Value;
import lombok.experimental.Wither;

@Wither
@Value
@Builder
public class TestModel {

    private String id;

    private String partnerId;

    private Date dateOfCamp;

    private Long expectedNoOfDonor;

    private Long actualNoOfDonor;
}
